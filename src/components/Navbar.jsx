import React from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';

const icon = "https://www.citypng.com/public/uploads/preview/-51614893185k4ffbcatrp.png";
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src = {icon} size = "large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">
                        Crypto Pop Up
                    </Link>
                </Typography.Title>
            </div>
         </div>  
    )
}

export default Navbar
