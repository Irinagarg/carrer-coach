import React from 'react'
import { getUserOnboardingStatus } from '../../../actions/user';
import { redirect } from 'next/dist/server/api-utils';
import { getIndustryInsights } from '../../../actions/dashboard';

const IndustryInsightsPage = async()=>  {

      const { isOnboarded } = await getUserOnboardingStatus();
      const insights = await getIndustryInsights();
      if (!isOnboarded) {
        redirect("/onboarding");
      }
  return (
    <div className="container mx-auto">
       <DashboardView insights ={insights}
/>    
</div>
  )
}

export default IndustryInsightsPage
