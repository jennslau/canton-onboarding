# Canton AI-Powered Onboarding System

A comprehensive Vue 3 + TypeScript application for managing crypto validator onboarding with 166 internal tasks and simplified customer journey.

## 🚀 Features

- **Dual Interface System**: Customer-facing dashboard and internal operations dashboard
- **166 Task Management**: Complete internal task tracking with progress visualization
- **8-Step Customer Journey**: Simplified customer experience with progress tracking
- **Customer Step 1 Forms**: Interactive Configuration & Setup and Wallets & Accounts forms
- **Canton Wavie AI Assistant**: Intelligent chat assistant for onboarding guidance
- **Real-time Progress Tracking**: Live progress bars and completion indicators
- **ERP Integration Support**: Xero, QuickBooks Online, NetSuite, and Sage
- **Role-based Access Control**: Customer, Internal Team, and CS Manager roles
- **Reports & Analytics**: Comprehensive progress reports and next actions

## 🛠 Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Vue
- **State Management**: Pinia
- **Routing**: Vue Router
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/canton-onboarding.git
   cd canton-onboarding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Setup

The application uses demo data and doesn't require environment variables for basic functionality.

## 👥 Demo Users

### Customer Users (Tier 2 Validators)
- **finance@validator1.com** - Sarah Johnson (Validator One LLC, Xero)
- **accounting@validator2.io** - Mike Chen (Crypto Validator Corp, QBO)

### Internal Team Users
- **cso@bitwave.io** - Alex Rivera (Customer Success Officer)
- **cs.manager@bitwave.io** - Jessica Kim (CS Program Manager)

## 🎯 User Flows

### Customer Experience
1. **Login** → Customer Dashboard
2. **Step 1**: Complete Configuration & Setup + Wallets & Accounts forms
3. **Progress Tracking**: View 8-step journey with real-time progress
4. **Quick Actions**: Access Canton Wavie, Upload Documents, Schedule Sessions, View Reports

### Internal Team Experience
1. **Login** → Internal Dashboard
2. **Customer Management**: View all customers with progress tracking
3. **Task Management**: Manage 166 internal tasks with status updates
4. **CSV Upload**: Update task lists with progress preservation
5. **Customer Creation**: Create new customers and send invitations

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── LoginScreen.vue
│   ├── customer/
│   │   ├── CustomerDashboard.vue
│   │   ├── CustomerStep1.vue
│   │   ├── ConfigurationForm.vue
│   │   └── WalletsForm.vue
│   ├── internal/
│   │   └── InternalDashboard.vue
│   ├── shared/
│   │   ├── CantonWavie.vue
│   │   ├── ProgressBar.vue
│   │   ├── StatusIcon.vue
│   │   └── Modal.vue
│   └── modals/
│       └── ReportsModal.vue
├── stores/
│   ├── auth.ts
│   ├── customers.ts
│   ├── tasks.ts
│   └── forms.ts
├── data/
│   ├── demoUsers.ts
│   ├── customers.ts
│   ├── customerSteps.ts
│   ├── internalTasks.ts
│   └── wavieResponses.ts
├── types/
│   └── index.ts
├── utils/
│   └── statusHelpers.ts
├── composables/
│   └── useWavie.ts
└── router/
    └── index.ts
```

## 🔑 Key Components

### Customer Dashboard Features
- **Progress Header**: Shows current week and overall completion percentage
- **8-Step Journey**: Visual step-by-step progress with status indicators
- **Implementation Progress**: Phase-wise completion tracking
- **Quick Actions**: Canton Wavie, Document Upload, Scheduling, Reports

### Customer Step 1 Forms
- **Configuration & Setup**: 12+ fields covering business setup, ERP, accounting defaults
- **Wallets & Accounts**: Dynamic wallet management with add/remove functionality
- **Progress Tracking**: Real-time completion status and validation

### Internal Dashboard Features
- **Customer Overview**: All customers with progress indicators
- **Task Management**: 166 internal tasks with clickable status updates
- **Phase Progress**: Visual tracking across all onboarding phases
- **CSV Upload**: Task list updates with progress preservation

### Canton Wavie AI Assistant
- **Smart Responses**: Validator-focused guidance and help
- **Context Awareness**: Understands current customer step and progress
- **Chat Interface**: Real-time messaging with timestamp tracking

## 📊 Data Models

### Customer
```typescript
interface Customer {
  id: number;
  name: string;
  tier: number;
  erpSystem: string;
  currentPhase: string;
  overallProgress: number;
  currentCustomerStep: number;
  weekInImplementation: number;
}
```

### Task
```typescript
interface Task {
  id: number;
  step: number;
  phase: string;
  task: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'blocked';
  customerFacing: boolean;
  executes: string;
  accountable: string;
}
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) to Purple (#7c3aed) gradients
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Components
- **Cards**: `bg-white rounded-2xl shadow-lg border border-gray-200`
- **Buttons**: Gradient backgrounds with hover effects
- **Progress Bars**: Color-coded based on completion percentage
- **Forms**: Clean inputs with focus states and validation

## 🔄 State Management

The application uses Pinia for state management with the following stores:

- **Auth Store**: User authentication and role management
- **Customer Store**: Customer data and selection
- **Task Store**: Internal task management and progress tracking
- **Form Store**: Step 1 form data and completion status

## 🚀 Performance

- **Lazy Loading**: Components loaded on demand
- **Optimized Builds**: Vite for fast builds and hot reload
- **Minimal Bundle**: Tree-shaking and code splitting
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about the Canton onboarding system, please contact the development team.
