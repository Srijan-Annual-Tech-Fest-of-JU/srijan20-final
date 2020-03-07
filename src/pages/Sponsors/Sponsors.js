import React from 'react';
import { Row, Col, Card } from 'antd';
import rfd from '../../assets/Images/Sponsors/rfd-min.jpg';
import clarion from '../../assets/Images/Sponsors/cl.png';
import hyundai from '../../assets/Images/Sponsors/1280px-Hyundai_Motor_Company_logo.svg.png';
import webel from '../../assets/Images/Sponsors/Webel Fuji Logo.png';
import gail from '../../assets/Images/Sponsors/1200px-GAIL_Logo.svg.png';
import erudite from '../../assets/Images/Sponsors/Erudite Logo.jpg';
import tinder from '../../assets/Images/Sponsors/tinder-R-red-RGB.png';
import zeroDSecurity from '../../assets/Images/Sponsors/ZDS Icon.jpeg';
import atkt from '../../assets/Images/Sponsors/ATKT Logo 2.png';
import myprintstory from '../../assets/Images/Sponsors/MY PRINT STORY LOGO-min.jpg'
import vani from '../../assets/Images/Sponsors/vani.jpg';
import './Sponsors.css';

const Sponsors = props => {
  return (
    <section className="sponsors">
      <Row>
        <Col lg={24} className="flex-container" style={{ padding: '.5rem', textAlign: 'center'}}>
          <Card headStyle={{backgroundColor: 'rgba(22, 104, 159, 0.3)', borderBottom: '2px solid #00ebff', color: '#00ebff' }}
                bodyStyle={{backgroundColor: 'rgba(22, 104, 159, 0.2)', border: 'none' }}
                style={{ width: '100%',backgroundColor: 'rgba(0,0,0,0)', border: 'none', color: '#00ebff' }}
                title="Sponsors">
            <Row>
              <Col lg={24} style={{ padding: '1rem 0' }}>
                <strong><h3>Gold Sponsors</h3></strong>
                <a href="https://www.mobilewalla.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="175" viewBox="0 0 200 40" style={{ margin: '1rem 0' }}>
                    <g fill="none" fill-rule="nonzero">
                      <g fill="#fff">
                        <path d="M57.12 15.508H60v1.574h.065c.982-1.18 2.26-1.77 3.863-1.77 1.015.032 1.866.196 2.488.524.622.36 1.178.853 1.702 1.41 1.178-1.312 2.717-1.967 4.68-1.935 1.245 0 2.357.427 3.372 1.312 1.015.885 1.539 2.164 1.571 3.869v9.869h-2.88v-8.853c0-1.049-.262-1.836-.818-2.393-.557-.558-1.277-.82-2.128-.82-.884 0-1.604.262-2.16.82-.557.557-.852 1.344-.852 2.393v8.853h-2.88v-8.853c0-1.049-.262-1.836-.818-2.393-.557-.558-1.277-.82-2.16-.82-.885 0-1.572.262-2.128.82-.59.557-.884 1.344-.884 2.393v8.853h-2.88V15.508h-.034zM79.967 22.918c0-1.574.131-2.787.36-3.607.262-.82.655-1.508 1.179-2.065.393-.492.949-.95 1.67-1.312.687-.36 1.603-.557 2.716-.59 1.146.033 2.062.23 2.75.59.687.394 1.243.82 1.603 1.345a4.68 4.68 0 0 1 1.212 2.065c.229.853.36 2.033.36 3.607 0 1.574-.131 2.754-.36 3.574a5.107 5.107 0 0 1-1.212 2.13c-.196.23-.425.427-.687.656-.229.23-.556.46-.916.623-.688.427-1.604.623-2.75.656-1.113-.033-1.997-.23-2.684-.656-.72-.36-1.277-.786-1.67-1.245-.523-.59-.916-1.312-1.178-2.132-.262-.852-.393-2.065-.393-3.639zm8.97.033c0-1.05-.034-1.836-.132-2.328a3.31 3.31 0 0 0-.556-1.246 2.278 2.278 0 0 0-.95-.787c-.392-.197-.85-.295-1.374-.295-.491 0-.95.098-1.375.295a2.9 2.9 0 0 0-.982.787c-.262.36-.426.754-.557 1.246-.098.492-.163 1.246-.163 2.295 0 1.05.065 1.803.163 2.262.099.492.295.918.557 1.279.262.295.59.557.982.754.425.197.884.328 1.375.328.523 0 .982-.098 1.375-.328.425-.23.72-.459.949-.754.294-.36.49-.82.556-1.279.098-.459.131-1.213.131-2.23zM94.173 9.508h2.881v7.607a7.187 7.187 0 0 1 1.735-1.279c.59-.328 1.244-.459 1.964-.459 1.767.033 3.044.689 3.862 1.934.393.46.655 1.082.819 1.837.13.754.196 2.032.196 3.803 0 1.77-.065 3.016-.196 3.77-.164.787-.426 1.443-.819 1.902a4.597 4.597 0 0 1-1.57 1.377c-.623.36-1.408.525-2.292.557-1.506-.032-2.75-.623-3.699-1.737v1.54h-2.88V9.509zm5.729 8.787c-.655 0-1.146.131-1.539.426-.392.263-.687.656-.883 1.082-.164.46-.295.951-.36 1.476a13.367 13.367 0 0 0 0 3.246c.065.557.163 1.049.36 1.508.196.459.49.82.883 1.082.393.295.884.426 1.539.426.687 0 1.21-.131 1.636-.393.393-.263.688-.623.852-1.05.196-.459.294-.95.36-1.508.032-.524.032-1.082.032-1.64 0-.59 0-1.18-.032-1.737a6.948 6.948 0 0 0-.36-1.475 1.946 1.946 0 0 0-.852-1.05c-.425-.262-.982-.393-1.636-.393zM108.87 9.508h2.881v2.951h-2.88v-2.95zm0 6h2.881v14.853h-2.88V15.508zM115.22 9.508h2.881v17.05c0 .688.36 1.016 1.08 1.016h1.015v2.82h-1.276c-1.048 0-1.931-.263-2.619-.82-.72-.558-1.08-1.476-1.08-2.787V9.508zM124.78 24.066c0 1.18.326 2.098.981 2.72.622.624 1.44.952 2.455.952 1.178 0 2.226-.492 3.142-1.443l2.095 1.836c-1.473 1.607-3.208 2.426-5.171 2.394a7.322 7.322 0 0 1-2.226-.328 6.106 6.106 0 0 1-1.048-.492c-.36-.197-.687-.394-1.015-.689-.621-.557-1.112-1.311-1.473-2.327-.425-.951-.621-2.197-.621-3.738 0-1.476.163-2.689.523-3.672.36-.984.819-1.77 1.375-2.361.557-.59 1.211-1.016 1.931-1.246a5.884 5.884 0 0 1 2.063-.393c1.636.032 3.044.59 4.157 1.672 1.145 1.115 1.734 2.656 1.767 4.623v2.459h-8.936v.033zm6.087-2.46c-.032-1.147-.327-2.032-.916-2.622-.557-.558-1.277-.853-2.128-.853-.884 0-1.571.295-2.127.853-.557.59-.851 1.475-.917 2.623h6.088zM152.079 30.36h-1.604L146.318 18l-4.19 12.393h-1.604l-4.747-14.852h1.735l3.797 12.984 4.256-12.984h1.538l4.255 12.984 3.797-12.984h1.735zM168.314 30.36v-1.475c-.622.623-1.276 1.082-1.964 1.312-.654.23-1.538.36-2.553.36-1.113 0-1.997-.098-2.651-.295a3.828 3.828 0 0 1-1.702-1.049 3.225 3.225 0 0 1-.786-1.279c-.196-.524-.262-1.049-.262-1.606 0-1.344.458-2.394 1.375-3.148.916-.754 2.193-1.114 3.797-1.114h4.812v-1.673c0-1.18-.328-2.098-.95-2.72-.621-.624-1.702-.919-3.24-.919-1.048 0-1.866.131-2.488.426a4.14 4.14 0 0 0-1.604 1.443l-1.145-.984c.621-.885 1.374-1.475 2.193-1.803.818-.328 1.833-.492 3.044-.492 1.964 0 3.404.426 4.353 1.279.95.852 1.408 2.033 1.408 3.607v10.163h-1.637v-.032zm0-7.081H163.7c-2.52 0-3.797.983-3.797 2.983 0 .984.294 1.705.916 2.197.622.459 1.604.721 2.946.721a9.5 9.5 0 0 0 1.964-.196 3.395 3.395 0 0 0 1.735-.951c.557-.525.819-1.443.819-2.82V23.28h.032zM177.381 30.36c-1.21 0-2.095-.36-2.684-1.049-.589-.688-.884-1.639-.884-2.786V8.426h1.572V26.46c0 .852.163 1.475.49 1.869.328.426.917.623 1.8.623h1.081v1.377h-1.375v.033zM184.975 30.36c-1.21 0-2.094-.36-2.684-1.049-.589-.688-.883-1.639-.883-2.786V8.426h1.57V26.46c0 .852.164 1.475.492 1.869.327.426.916.623 1.8.623h1.08v1.377h-1.375v.033zM198.396 30.36v-1.475c-.622.623-1.277 1.082-1.964 1.312-.655.23-1.538.36-2.553.36-1.113 0-1.997-.098-2.652-.295a3.828 3.828 0 0 1-1.702-1.049 3.225 3.225 0 0 1-.785-1.279c-.197-.524-.262-1.049-.262-1.606 0-1.344.458-2.394 1.375-3.148.916-.754 2.193-1.114 3.797-1.114h4.812v-1.673c0-1.18-.328-2.098-.95-2.72-.622-.624-1.767-.952-3.306-.952-1.047 0-1.866.131-2.488.427a4.14 4.14 0 0 0-1.603 1.442l-1.146-.983c.622-.886 1.375-1.476 2.193-1.804.818-.328 1.833-.492 3.044-.492 1.964 0 3.404.427 4.354 1.28.916.852 1.407 2.032 1.407 3.606V30.36h-1.57zm0-7.081h-4.615c-2.52 0-3.797.983-3.797 2.983 0 .984.294 1.705.916 2.197.622.459 1.604.721 2.946.721a9.5 9.5 0 0 0 1.964-.196 3.395 3.395 0 0 0 1.735-.951c.556-.525.818-1.443.818-2.82V23.28h.033z"></path>
                      </g>
                      <g fill="#FF8300">
                        <path d="M11.13 39.836C4.32 35.64.097 28.098.097 20.033c0-7.443 3.6-14.492 9.624-18.885l1.342-.984L23.306 12.59 34.468 1.41 35.646.23l1.343.983c5.99 4.36 9.558 11.41 9.558 18.82 0 8.033-4.223 15.574-11.031 19.803l-2.783-2.787c.033-.033.458-.328.491-.36 5.827-3.476 9.427-9.87 9.427-16.656a19.486 19.486 0 0 0-6.677-14.656l-10.737 10.82c-.753.754-1.898 1.869-1.898 1.869l-1.113-1.082-11.522-11.64C6.448 9.016 3.96 14.394 3.96 20.033c0 6.787 3.6 13.147 9.394 16.623.066.033.524.328.557.36l-2.783 2.82z"></path>
                        <path d="M30.704 35.016l-7.365-7.475-7.43 7.443-1.31-.787C8.805 30.72 6.285 23.77 6.809 18.689c.36-3.443 1.603-6.558 3.633-9.017.033-.065.229-.23.262-.295l2.75 2.754-.099.099c-1.506 1.868-2.422 4.229-2.684 6.852-.36 3.41 1.31 8.164 4.746 10.918l7.987-8 7.856 7.967c2.684-2.23 4.583-5.737 4.747-9.049.163-3.246-.786-6.426-2.685-8.754l-.065-.066 2.75-2.787c.065.066.196.263.261.328 2.52 3.082 3.83 7.279 3.601 11.509-.262 5.049-3.437 10.295-7.823 13.016l-1.342.852z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="https://gailonline.com/home.html" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={gail} alt="Gail"/>
                  </div>
                </a>
              </Col>
              <strong><h3>Gaming Partners</h3></strong>
              <Col md={12} style={{ padding: '1rem 0' }}>
                <a href="https://www.facebook.com/RFDGamingKolkata/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={rfd} alt="Ready for Destiny"/>
                  </div>
                </a>
              </Col>
              <Col md={12} style={{ padding: '1rem 0' }}>
                <a href="https://www.clarioncomputers.in/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={clarion} alt="Clarion"/>
                  </div>
                </a>
              </Col>
              <Col md={12} style={{ padding: '1rem 0' }}>
                <strong><h3>Wheels Partner</h3></strong>
                <a href="https://www.hyundai.com/in/en" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={hyundai} alt="Hyundai" style={{ background: '#fafafa', padding: '1rem' }}/>
                  </div>
                </a>
              </Col>
              <Col md={12} style={{ padding: '1rem 0' }}>
                <strong><h3>Industry 4.0 Training Partner</h3></strong>
                <a href="http://webelfujisoftvara.com/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={webel} alt="Webel-Fujisoft-Vara"/>
                  </div>
                </a>
              </Col>
              <strong><h3>Other sponsors</h3></strong>
              <Col md={8} style={{ padding: '1rem 0' }}>
                <a href="http://myprintstory.com/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={myprintstory} alt="My Print Story"/>
                  </div>
                </a>
              </Col>
              <Col md={8} style={{ padding: '1rem 0' }}>
                <a href="https://atkt.in/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={atkt} alt="atkt"/>
                  </div>
                </a>
              </Col>
              <Col md={8} style={{ padding: '1rem 0' }}>
                <a href="https://www.facebook.com/EruditeEducation" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={erudite} alt="Erudite"/>
                  </div>
                </a>
              </Col>
              <Col md={8} style={{ padding: '1rem 0' }}>
                <a href="https://tinder.com/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={tinder} alt="Tinder"/>
                  </div>
                </a>
              </Col>
              <Col md={8} style={{ padding: '1rem 0' }}>
                <a href="https://www.zerodollarsecurity.in/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={zeroDSecurity} alt="Zero Dollar Security"/>
                  </div>
                </a>
              </Col>
              <Col md={8} style={{ padding: '1rem 0' }}>
                <a href="https://www.facebook.com/vanikolkata/" target="_blank" rel="noopener noreferrer">
                  <div className="sponsor-img-container">
                    <img src={vani} alt="Vani Institute"/>
                  </div>
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Sponsors;