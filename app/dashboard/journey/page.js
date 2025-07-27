import React from 'react'
import { fetchAuthenticatedUser } from '@/app/actions/user/data';
import Image from 'next/image';
import { auth } from '@/app/auth';
import balance_card from "@/public/related_assets/Images/balance_circle.svg"
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';

import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const Breadcrumb = dynamic(() => import("@/components/breadcrumb/Breadcrumb"), {
  loading: () => <GlobalProgress />
});

const ValidateJourney = dynamic(() => import("@/components/journey/ValidateJourney"), {
  loading: () => <GlobalProgress />
});

const page = async () => {

  const { user: logedinUser } = await auth();

  const user = await fetchAuthenticatedUser() || {};

  return (
    <>
      <div className='background-color page_animation'>
        <section className="journey-section">
          <Breadcrumb
            link="/dashboard"
            title="Lot Boosting"
            authenticatedUser={JSON.parse(JSON.stringify(user))}
            isColor="#fff"
          />
          <div className="journey-info-wrapper">
            <div className='user-balance-wrapper'>
              <div className='balance-card-img'>
                <Image
                  src={balance_card}
                  alt='card'
                  height={100}
                  width={100}
                  unoptimized
                />
                <div className='acc-balance-info'>
                  <h1>$ {user?.balance?.toFixed(2) ?? ""}</h1>
                  <h4>Total Balance</h4>
                </div>
              </div>

              <div className="journey-start-details-wrapper">
                <div className="journey-start-details-parent">
                  <div className="journey-start-details-childs">
                    <h4>{user?.daily_available_order ?? ""}</h4>
                    <p>Total Lots</p>
                  </div>
                  <div className="journey-start-details-childs">
                    <h4>{user?.today_order ?? ""}</h4>
                    <p>Total in Boosting</p>
                  </div>
                  <div className="journey-start-details-childs">
                    <h4>{user?.today_commission?.toFixed(2) ?? ""}</h4>
                    <p>Current Dividend</p>
                  </div>
                </div>
              </div>
              <div className="journey-submit-btn mt2">
                <ValidateJourney
                  user={JSON.parse(JSON.stringify(user))}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <SecurityCheck
        user={JSON.parse(JSON.stringify(logedinUser))}
        authenticatedUser={JSON.parse(JSON.stringify(user))}
      />
    </>
  )
}

export default page;