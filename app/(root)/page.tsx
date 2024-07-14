import HeaderBox from '@/components/ui/HeaderBox';
import RightSideBar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Felix', lastName: 'Odhis',email: 'felodhi@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={50.00}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSideBar
      user={loggedIn}
      transaction={[]}
      banks={[{ currentBalance: 50.00}, {currentBalance: 1250.00}]}
      />
    </section>
  )
}

export default Home