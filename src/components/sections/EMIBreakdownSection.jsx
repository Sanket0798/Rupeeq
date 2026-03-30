/**
 * EMIBreakdownSection
 * Stacked bar chart + yearly amortisation table
 */
const EMIBreakdownSection = ({ loanAmount = 2500000, interestRate = 6.5, loanTenure = 5 }) => {
  const safeLoan = loanAmount > 0 ? loanAmount : 100000;
  const safeRate = interestRate > 0 ? interestRate : 0.1;
  const safeTenure = loanTenure > 0 ? loanTenure : 1;

  const r = safeRate / 12 / 100;
  const n = safeTenure * 12;
  const emi = r === 0
    ? safeLoan / n
    : (safeLoan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  // Build yearly schedule
  const startYear = new Date().getFullYear();
  const schedule = [];
  let balance = safeLoan;
  let monthsDone = 0;

  for (let y = 0; y < Math.ceil(safeTenure); y++) {
    const monthsThisYear = Math.min(12, n - monthsDone);
    let yp = 0, yi = 0;
    for (let m = 0; m < monthsThisYear; m++) {
      const ip = balance * r;
      const pp = Math.min(emi - ip, balance);
      yi += ip; yp += pp;
      balance = Math.max(0, balance - pp);
    }
    monthsDone += monthsThisYear;
    schedule.push({
      year: startYear + y,
      principal: Math.round(yp),
      interest: Math.round(yi),
      totalPayment: Math.round(yp + yi),
      outstanding: Math.round(balance),
      tillDate: (((safeLoan - balance) / safeLoan) * 100).toFixed(2),
    });
  }

  const fmt = (v) => `Rs. ${v.toLocaleString('en-IN')}`;

  // ── Chart constants ──
  const CHART_H = 260;
  const BAR_GAP = 120;
  const BAR_W = 50;
  const Y_AXIS_W = 75;
  const PADDING_TOP = 10;
  const X_LABEL_H = 24;
  const TOTAL_W = Y_AXIS_W + schedule.length * BAR_GAP + 30;
  const TOTAL_H = PADDING_TOP + CHART_H + X_LABEL_H;

  // Round yMax to a clean step
  const rawMax = Math.max(...schedule.map(s => s.principal + s.interest));
  const step = Math.pow(10, Math.floor(Math.log10(rawMax))) / 2;
  const yMax = Math.ceil(rawMax / step) * step;
  const TICK_COUNT = 6;
  const ticks = Array.from({ length: TICK_COUNT + 1 }, (_, i) =>
    Math.round((yMax / TICK_COUNT) * (TICK_COUNT - i))
  );

  const toY = (val) => PADDING_TOP + CHART_H - (val / yMax) * CHART_H;

  return (
    <section className="pt-10 md:pt-14 md:py-14 bg-white">
      <div className="max-w-[1364px] mx-auto px-4 md:px-6 lg:px-8">

        {/* ── Bar Chart ── */}
        <div className="bg-white rounded-2xl shadow-card p-5 md:p-8 mb-6">
          <p className="font-bold text-sm md:text-lg text-custom-dark-text mb-2">EMI Breakdown</p>
          <div className="flex items-center gap-6 mb-4 text-xs md:text-sm">
            <span className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-sm bg-[#4E2FA3]" /> Principal
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-sm bg-[#34CA8D]" /> Interest
            </span>
          </div>

          <div className="overflow-x-auto">
            <svg
              viewBox={`0 0 ${TOTAL_W} ${TOTAL_H}`}
              width="100%"
              style={{ minWidth: Math.max(320, schedule.length * 70) }}
              preserveAspectRatio="xMinYMin meet"
            >
              {/* Grid lines + Y labels */}
              {ticks.map((tick, i) => {
                const y = toY(tick);
                return (
                  <g key={i}>
                    <line x1={Y_AXIS_W} y1={y} x2={TOTAL_W - 10} y2={y} stroke="#E5E7EB" strokeWidth="1" />
                    <text x={Y_AXIS_W - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#9CA3AF">
                      {tick.toLocaleString('en-IN')}
                    </text>
                  </g>
                );
              })}

              {/* Y-axis label */}
              <text
                x={12} y={PADDING_TOP + CHART_H / 2}
                textAnchor="middle" fontSize="10" fill="#9CA3AF"
                transform={`rotate(-90, 12, ${PADDING_TOP + CHART_H / 2})`}
              >
                Amount (INR)
              </text>

              {/* Bars */}
              {schedule.map((row, i) => {
                const x = Y_AXIS_W + i * BAR_GAP + (BAR_GAP - BAR_W) / 2;
                const totalH = (row.principal + row.interest) / yMax * CHART_H;
                const principalH = row.principal / yMax * CHART_H;
                const interestH = row.interest / yMax * CHART_H;
                const baseY = PADDING_TOP + CHART_H;

                return (
                  <g key={row.year}>
                    {/* Interest — top segment */}
                    <rect x={x} y={baseY - totalH} width={BAR_W} height={interestH} fill="#34CA8D" />
                    {/* Principal — bottom segment */}
                    <rect x={x} y={baseY - principalH} width={BAR_W} height={principalH} fill="#4E2FA3" />
                    {/* X label */}
                    <text
                      x={x + BAR_W / 2} y={baseY + 18}
                      textAnchor="middle" fontSize="11" fill="#6B7280"
                    >
                      {row.year}
                    </text>
                  </g>
                );
              })}

              {/* X axis line */}
              <line
                x1={Y_AXIS_W} y1={PADDING_TOP + CHART_H}
                x2={TOTAL_W - 10} y2={PADDING_TOP + CHART_H}
                stroke="#D1D5DB" strokeWidth="1"
              />
            </svg>
            <p className="text-center text-[10px] md:text-lg text-gray-900 mt-1">Years</p>
          </div>
        </div>

        {/* ── Amortisation Table ── */}
        <div className="rounded-2xl overflow-hidden shadow-card">
          <div className="grid grid-cols-3 md:grid-cols-6 bg-custom-purple text-white text-xs md:text-sm font-semibold">
            {['Year', 'Principal', 'Interest', 'Total Payment', 'Outstanding', 'Till Date'].map((h) => (
              <div key={h} className="py-4 px-3 md:px-5 md:text-2xl md:font-semibold text-center">{h}</div>
            ))}
          </div>
          {schedule.map((row, i) => (
            <div
              key={row.year}
              className={`grid grid-cols-3 md:grid-cols-6 text-xs md:text-sm border-b border-gray-200 last:border-b-0 ${i % 2 === 0 ? 'bg-[#EEF4FF]' : 'bg-[#EEF4FF]'}`}
            >
              <div className="py-3 px-3 md:px-5 md:text-xl md:font-normal text-center font-medium text-custom-dark-text">+ {row.year}</div>
              <div className="py-3 px-3 md:px-5 md:text-lg md:font-normal text-center text-custom-dark-text">{fmt(row.principal)}</div>
              <div className="py-3 px-3 md:px-5 md:text-lg md:font-normal text-center text-custom-dark-text">{fmt(row.interest)}</div>
              <div className="py-3 px-3 md:px-5 md:text-lg md:font-normal text-center text-custom-dark-text hidden md:block">{fmt(row.totalPayment)}</div>
              <div className="py-3 px-3 md:px-5 md:text-lg md:font-normal text-center text-custom-dark-text hidden md:block">{fmt(row.outstanding)}</div>
              <div className="py-3 px-3 md:px-5 md:text-lg md:font-normal text-center font-semibold text-custom-dark-text hidden md:block">{row.tillDate}%</div>
            </div>
          ))}
        </div>

        <p className="md:hidden text-xs text-gray-400 text-center mt-3">
          View on desktop for full table details
        </p>
      </div>
    </section>
  );
};

export default EMIBreakdownSection;
