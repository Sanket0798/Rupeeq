// UI Components Usage Examples
import { Button, Card, Input, Badge } from './index';
import { ArrowRight, Search } from 'lucide-react';

// ============================================
// BUTTON EXAMPLES
// ============================================

// Primary Button (Green)
<Button variant="primary" size="md">
  Get Started
</Button>

// Outline Button (Blue border)
<Button variant="outline" size="md">
  Login
</Button>

// Ghost Button (Transparent)
<Button variant="ghost" size="md">
  Learn More
</Button>

// With Icon
<Button variant="primary" size="md">
  Get Started <ArrowRight size={20} />
</Button>

// Different Sizes
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>

// Disabled
<Button variant="primary" disabled>Disabled</Button>

// ============================================
// CARD EXAMPLES
// ============================================

// Default Card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Gradient Card (Purple)
<Card variant="gradient">
  <h3>Gradient Card</h3>
  <p>Purple gradient background</p>
</Card>

// Gradient Card (Green)
<Card variant="gradient-green">
  <h3>Green Gradient</h3>
  <p>Green gradient background</p>
</Card>

// Light Gradient Card
<Card variant="gradient-light">
  <h3>Light Gradient</h3>
  <p>Subtle gradient background</p>
</Card>

// Bordered Card
<Card variant="bordered">
  <h3>Bordered Card</h3>
  <p>With border</p>
</Card>

// Glass Card
<Card variant="glass">
  <h3>Glass Effect</h3>
  <p>Frosted glass effect</p>
</Card>

// No Hover Effect
<Card hover={false}>
  <h3>Static Card</h3>
  <p>No hover animation</p>
</Card>

// ============================================
// INPUT EXAMPLES
// ============================================

// Basic Input
<Input 
  placeholder="Enter your email"
  type="email"
/>

// With Icon
<Input 
  placeholder="Search..."
  icon={<Search size={20} />}
/>

// Error State
<Input 
  placeholder="Enter value"
  error={true}
/>

// Disabled
<Input 
  placeholder="Disabled"
  disabled={true}
/>

// ============================================
// BADGE EXAMPLES
// ============================================

// Primary Badge
<Badge variant="primary">New</Badge>

// Secondary Badge
<Badge variant="secondary">Featured</Badge>

// Success Badge
<Badge variant="success">Active</Badge>

// Warning Badge
<Badge variant="warning">Pending</Badge>

// Danger Badge
<Badge variant="danger">Urgent</Badge>

// Info Badge
<Badge variant="info">Info</Badge>

// Light Badge
<Badge variant="light">Draft</Badge>

// Different Sizes
<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
<Badge variant="primary" size="lg">Large</Badge>

// ============================================
// COMBINED EXAMPLES
// ============================================

// Card with Button
<Card variant="gradient">
  <h3 className="text-2xl font-bold mb-4">Special Offer</h3>
  <p className="mb-6">Get 50% off on your first loan</p>
  <Button variant="outline" size="md">
    Claim Offer <ArrowRight size={20} />
  </Button>
</Card>

// Form with Input and Button
<div className="space-y-4">
  <Input placeholder="Email address" type="email" />
  <Input placeholder="Password" type="password" />
  <Button variant="primary" size="md" className="w-full">
    Sign In
  </Button>
</div>

// Product Card
<Card>
  <Badge variant="success" className="mb-4">Popular</Badge>
  <h3 className="text-xl font-bold mb-2">Personal Loan</h3>
  <p className="text-neutral-600 mb-4">Quick approval for your needs</p>
  <Button variant="primary" size="sm">
    Apply Now <ArrowRight size={16} />
  </Button>
</Card>
