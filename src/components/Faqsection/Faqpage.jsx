import React from 'react'

import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';

const faqdata = (panelStyle) => [
  {
    key: '1',
    label: 'What would be the rate of interest of personal loan?',
    children: <p>Personal loan starts from 8.5% per annum however rate of interest depends on customer’s profile and their credit history. We will try our best to get you the best rate of interest as per your profile. For more information please try our free consultation service.</p>,
    style: panelStyle,
  },
  {
    key:'2',
    label: "What would be the rate of interest of business loan?",
    children: <p>Personal loan starts from 11% per annum however rate of interest depends on customer’s profile and their credit history. We will try our best to get you the best rate of interest as per your profile. For more information please try our free consultation service.</p>,
    style: panelStyle
  },
 {
    key: '3',
    label:'What would be the rate of interest of home loan?',
    children: <p>Home loan starts from 8.25% per annum however rate of interest depends on customer’s profile and their credit history. We will try our best to get you the best rate of interest as per your profile. For more information please try our free consultation service.</p>,
    style: panelStyle
  },{
    key: '4',
    label: "What would be the rate of interest of Mortgage loan?",
    children: <p>Mortgage loan usually means gold loan, on car or loan against property, so it depends on what product you’re willing to put as mortgage. It starts from 4% to 25%. For more information please try our free consultation service.</p>,
    style: panelStyle
  },
  {
    key: '5',
    label: "What would be the rate of interest of loan against property?",
    children: <p>Loan against property starts from 6% however it depends on the value of property and customer’s credit history. For more information please try our free consultation service.</p>,
    style: panelStyle
  },{
    key: '6',
    label: "What will be the documents required for loan?",
    children: <p>Documents depends on the loan type you chose, usually documents consists of identity proof, income proof and residence proof. For more information please try our free consultation service.</p>,
    style: panelStyle
  },{
    key:'7',
    label:"How much amount can you get us in loan?",
    children: <p>Amount depends on several factors such as income and liability on that income as well as some multipliers; please contact us so that we can let you know how much amount you are eligible for.</p>,
    style: panelStyle
  },{
    key: '8',
    label: 'What is your processing fee?',
    children: <p>We at Financial Consultant do not charge any fee from customers except in MSME loans, all the transactions will remain between customer and banks, banks processing fee depends on many factors such as the loan amount and some ongoing schemes. For more information please try our free consultation service.</p> ,
    style: panelStyle
  },{
    key: '9',
    label: 'If your rate of interest flat or floating/reducing?',
    children: <p>Well, reducing or floating rate of interest type is always best however it depends on banks and the approval; we try to get the customer whichever type of ROI scheme they want. For more information please try our free consultation service.</p> ,
    style: panelStyle
  },{
    key: '10',
    label: 'Which bank you’ll get the loan from me?',
    children: <p>It is depend on your profile, we have over 125+ banks linked with us, we will check your profile in depth and then process with one of our linked bank which we are sure will offer you the amount you need at best rate of interest.</p> ,
    style: panelStyle
  },

]



const Faqpage = () => {


  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <>
  <div className='flex flex-col justify-center items-center  p-2' >
  <h2 className='text-center text-4xl font-bold text-primarycolor p-4'>Frequently Asked Questions</h2>
    <Collapse className='text-lg w-[320px] sm:w-[640px]'
      bordered={false}
      // defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={faqdata(panelStyle)}
    />
  </div>
  </>
  );
}

export default Faqpage

