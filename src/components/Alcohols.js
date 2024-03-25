import React from 'react';
import { Outlet } from 'react-router-dom';


export default function Alcohols() {
    return (
      <div style={{ marginLeft: 65 }}>
        <h1>Alcohol</h1>
        <Outlet/>
      </div>
    );
  }