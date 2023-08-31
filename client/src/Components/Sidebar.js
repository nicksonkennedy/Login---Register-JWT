import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Sidebar = ({user, logoutHandler}) => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    console.log('clicked')
  };
  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
        
      <MenuOutlined className='text-xl cursor-pointer '  onClick={showDrawer}/>

      <Drawer title=""
       placement="right"
        onClose={onClose} 
        open={open}
        getContainer={false}
       visible={open}
       width='300'
        >
        {user && <div className='text-lg font-semibold text-slate-700 '>{user.email}</div>}
        <div className={'text-md text-center mt-4 font-semibold  cursor-pointer tracking-[.25em] p-2 text-slate-800 border-1 border-yellow-400'} onClick={logoutHandler}>Logout</div>
      </Drawer>
    </div>
  )
}

export default Sidebar