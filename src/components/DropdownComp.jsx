import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';


const items = [
  {
    key: 'item 1',
    label: 'Personal Loan',
  },
  {
    key: 'item 2',
    label: 'Business Loan',
  },
  {
    key: 'item 3',
    label: 'Gold Loan',
  },
  {
    key: 'item 4',
    label: 'Car Loan',
  },
  {
    key: 'item 5',
    label: 'Used-Car Loan',
  },
  {
    key: 'item 6',
    label: 'Mortagage Loan',
  }, {
    key: 'item 7',
    label: 'Home Loan',
  }, {
    key: 'item 8',
    label: 'Loan Against Property',
  }, {
    key: 'item 9',
    label: 'MSME',
  },
];
const DropdownComp = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
    }}
  >
    <Typography.Link>
      <Space>Loan
      
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default DropdownComp;