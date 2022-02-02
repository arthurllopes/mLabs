import React from 'react';
import Header from '../../components/Header';
import styles from './styles.module.css'

const SchedulingPage = () => {
  return (
        <>
            <Header />
            <main>
                <div>
                    <div className="cont">
                        <div className="rede"></div>
                        <div className="data"></div>
                    </div>
                    <div className="textopost"></div>
                    <div className="upload"></div>
                </div>
                <div className="visu">

                </div>
            </main>
            
        </>
    );
};

export default SchedulingPage;
