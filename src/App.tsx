import React, { Suspense } from 'react';
import { SkeletonProvider } from './providers/SkeletonProvider';
import DashboardLayout from './components/Layout/DashboardLayout';
import StatsCards from './components/Dashboard/StatsCards';
import SalesOverview from './components/Dashboard/SalesOverview';

function App() {
  return (
    <SkeletonProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardLayout>
          <div className="space-y-6">
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SalesOverview />
              {/* Add more dashboard components here */}
            </div>
          </div>
        </DashboardLayout>
      </Suspense>
    </SkeletonProvider>
  );
}

export default App;