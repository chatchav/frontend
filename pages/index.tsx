import React, { useState } from "react";
import Layout from '../components/layout';
import Banner from '../components/banner';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faDollar , faExclamationCircle, faVolumeHigh} from '@fortawesome/free-solid-svg-icons';
import { faComments, faImage} from '@fortawesome/free-regular-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactPlayer from 'react-player/lazy'


export default function Home() {
  const [watchVideo, setWatchVideo] = useState({
    url:"https://www.playwonderbox.com/assets/video/create_like_a_pro.mp4",
    label:"Create Like a Pro"
  });

  const changeVideo = (url,label) => {
      setWatchVideo(prevState => ({
        ...prevState,
        url: url,
        label:label
      }));
  }
return (
    <Layout>
      <>
      <div className="w-full">
        <Banner img="/img/banner.png"/>
      </div>
      <div className="md:container mx-auto">
          <div className="w-full flex flex-wrap my-8">
            <div className="w-full md:w-3/4 pr-2 my-10">
              <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                  <div >
                      <img src="/img/slider1.png"  className="rounded-lg"/>
                  </div>
                  <div>
                      <img src="/img/slider2.png" className="rounded-lg"/>
                  </div>
                  <div>
                      <img src="/img/slider3.png" className="rounded-lg"/>
                  </div>
              </Carousel>
            </div>
            <div className="w-full md:w-1/4 pl-2 my-10">
              <button type="button" className="relative flex flex-wrap w-full mx-4 mb-8 bg-pink-500 text-white rounded-lg px-3 py-7 text-left">
                <div className="self-center mx-2">
                  <FontAwesomeIcon icon={faDownload} width="40"/>
                </div>
                <div>
                  <p className="text-3xl font-bold">Download</p>
                  <p className="text-2xl">ดาวน์โหลดเกม</p> 
                </div>
                <img src="/img/hero-1-head.png" alt="" width="120" className="absolute -top-8 -right-10" />
              </button>
              <button type="button" className="relative flex flex-wrap w-full mx-4 my-9 bg-cyan-500 text-white rounded-lg px-3 py-7 text-left">
                <div className="self-center mx-2">
                  <FontAwesomeIcon icon={faDollar} width="30"/>
                </div>
                <div>
                  <p className="text-3xl font-bold">XX Pay</p>
                  <p className="text-2xl">เติมเงิน</p> 
                </div>
                <img src="/img/hero-4-head.png" alt="" width="120" className="absolute -top-8 -right-10" />
              </button>
              <button type="button" className="relative flex flex-wrap w-full mx-4 mt-8 text-white rounded-lg px-3 py-7 text-left" style={{backgroundColor:"#37008f"}}>
                <div className="self-center mx-2">
                  <FontAwesomeIcon icon={faExclamationCircle} width="40"/>
                </div>
                <div>
                  <p className="text-3xl font-bold">Problem</p>
                  <p className="text-2xl">แจ้งปัญหา</p> 
                </div>
                <img src="/img/hero-2-head.png" alt="" width="120" className="absolute -top-8 -right-10" />
              </button>
            </div>
          </div>
          <div className="w-full my-8 flex flex-wrap text-center px-auto rounded-full font-bold text-2xl">
              <div className="w-1/6 p-4 text-center flex flex-wrap rounded-l-full bg-yellow-400 text-pink-600">
                <p className="ml-8">ประกาศ</p>
                <FontAwesomeIcon icon={faVolumeHigh} width="30" className="mx-4"/>
              </div>
              <p className="w-5/6 p-4 rounded-r-full bg-gray-600 text-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
          <div className="w-full flex flex-wrap my-8">
            <div className="w-full md:w-3/4 pr-2">
              <div className="my-10">
              <Tabs>
              <TabList>
                <Tab style={{width:"18%"}}>News</Tab>
                <Tab style={{width:"18%"}}>Event</Tab>
                <Tab style={{width:"20%"}}>Promotion</Tab>
                <Tab style={{width:"25%"}}>Patch Note</Tab>
                <Tab style={{width:"19%"}}>Noticse</Tab>
              </TabList>

              <TabPanel>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news1.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold" style={{color:"#37008f"}}>
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news2.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold" style={{color:"#37008f"}}>
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news3.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold" style={{color:"#37008f"}}>
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
                <div className="w-full py-8 px-4 text-center my-4">
                    <a href="#" className="mx-auto text-2xl font-bold py-4 px-8 text-white bg-pink-500 rounded-full">ดูข่าวทั้งหมด</a>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="w-full text-center py-8 px-4">
                  <p className="text-2xl font-bold">
                    No Event.
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news2.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold text-purple-800">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news3.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold text-purple-800">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news1.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold text-purple-800">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news1.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold text-purple-800">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news2.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold text-purple-800">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap py-8 px-4">
                  <div className="w-2/4">
                    <img src="/img/news3.png" width="90%" className="rounded-lg" alt="" />
                  </div>
                  <div className="w-2/4 relative">
                    <h1 className="text-2xl font-bold text-purple-800">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </h1>
                    <p className="text-xl mt-2">
                      Lorem ipsum dolor sit amet, consectatur elit. Etiam nisl ligula, ullamcorper in diam
                    </p>
                    <div className="w-full flex flex-wrap absolute left-0 bottom-0">
                      <span className="mr-2 font-bold text-pink-700">43 mins ago</span>
                      {" - "}
                      <FontAwesomeIcon icon={faComments} width="20" className="mx-2"/><span className="font-bold">10</span> 
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
              </div>
            </div>
            <div className="w-full md:w-1/4 pl-2">
              <div className="mx-4 my-10">
                <div className="w-full h-40 bg-gray-200 rounded-lg">
                    <FontAwesomeIcon icon={faImage} className="text-gray-400 py-9 mx-auto" width="90"/>
                </div>
                <div className="w-full ranking rounded-lg my-10">
                  <div className="w-full relative rounded-lg text-4xl font-bold text-cyan-500">
                    <p className="w-full px-8 py-4">Top Rank</p>
                    <img src="/img/masters-of-magic-10.png" width="120" alt="" className="absolute bottom-0 -right-4" />
                  </div>
                  <Carousel showArrows={false} showThumbs={false} dynamicHeight={true} showStatus={false} infiniteLoop={true} >
                    <div className="w-full text-2xl text-white ">
                        {
                          [1,2,3,4,5,6,7,8,9,10].map((o,i)=>(
                            <div key={i} className={`flex flex-wrap ${o==1 ? `bg-yellow-500 shadow-lg shadow-yellow-500/50 mb-4`:`my-4`}`}>
                            <p className="w-2/4">{o+" Name"}</p>
                            <p className="w-2/4">XXXXXXX</p>
                            </div>
                          ))
                        }
                        <br/>
                    </div>
                    <div className="w-full text-2xl text-white rounded-lg">
                        {
                          [11,12,13,14,15,16,17,18,19,20].map((o,i)=>(
                            <div key={i} className="flex flex-wrap my-4 ">
                            <p className="w-2/4">{o+" Name"}</p>
                            <p className="w-2/4">XXXXXXX</p>
                            </div>
                          ))
                        }
                        <br/>
                    </div>
                    <div className="w-full text-2xl text-white rounded-lg">
                        {
                          [21,22,23,24,25,26,27,28,29,30].map((o,i)=>(
                            <div key={i} className="flex flex-wrap my-4 ">
                            <p className="w-2/4">{o+" Name"}</p>
                            <p className="w-2/4">XXXXXXX</p>
                            </div>
                          ))
                        }
                        <br/>
                    </div>
                  </Carousel>
                </div>
                <div className="w-full h-80 bg-gray-200 rounded-lg">
                    <FontAwesomeIcon icon={faImage} className="text-gray-400 py-28 mx-auto" width="90"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap bg-emerald-500 rounded-lg my-8">
            <div className="w-full h-full md:w-4/6 pr-4 p-8">
              <ReactPlayer
                className="react-player"
                style={{borderRadius:"0.5rem"}}
                pip={true}
                url={watchVideo.url}
                width='100%'
                height='450px' 
                controls={true}
              />
              <div className="w-full mt-4 font-bold text-3xl text-white">
                <p>{watchVideo.label}</p>
              </div>
            </div>
            <div className="w-full md:w-2/6 pl-2 p-8">
              <p className="font-bold text-3xl text-blue-800 ">Recent videos</p>
              <p className=" bg-blue-800 h-1 rounded-full"/>
              <div className="w-full mt-2 bg-emerald-600 px-4 py-1 rounded-lg text-white font-semibold">
                <div className="w-full flex flex-wrap my-2 cursor-pointer" onClick={()=>changeVideo('https://www.youtube.com/watch?v=D8Kzvd_gN-c','ก้อนกิน - illslick')}>
                    <div className="w-2/5">
                      <ReactPlayer
                        url='https://www.youtube.com/watch?v=D8Kzvd_gN-c'
                        width='100%'
                        height='90px' 
                      />
                    </div>
                    <div className="w-3/5 pl-2">
                      <p>ก้อนกิน - illslick</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap my-2 cursor-pointer" onClick={()=>changeVideo('https://www.playwonderbox.com/assets/video/magic_blocks.mp4','Magic Blocks')}>
                    <div className="w-2/5">
                      <ReactPlayer
                        url='https://www.playwonderbox.com/assets/video/magic_blocks.mp4'
                        width='100%'
                        height='90px'
                      />
                    </div>
                    <div className="w-3/5 pl-2">
                      <p>Magic Blocks</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap my-2 cursor-pointer" onClick={()=>changeVideo('https://www.playwonderbox.com/assets/video/epic_campaigns.mp4','Epic Campaigns')}>
                    <div className="w-2/5">
                      <ReactPlayer
                        url='https://www.playwonderbox.com/assets/video/epic_campaigns.mp4'
                        width='100%'
                        height='90px'
                      />
                    </div>
                    <div className="w-3/5 pl-2">
                      <p>Epic Campaigns</p>
                    </div>
                </div>
                <div className="w-full flex flex-wrap my-2 cursor-pointer" onClick={()=>changeVideo('https://www.playwonderbox.com/assets/video/customize_avatar.mp4','Customize Avatar')}>
                    <div className="w-2/5">
                      <ReactPlayer
                        url='https://www.playwonderbox.com/assets/video/customize_avatar.mp4'
                        width='100%'
                        height='90px'
                      />
                    </div>
                    <div className="w-3/5 pl-2">
                      <p>Customize Avatar</p>
                    </div>
                </div>
              </div>
              <div className="w-full pt-4 text-center my-4">
                    <a href="#" className="mx-auto font-semibold py-2 px-4 text-blue-800 border-2 border-blue-800 rounded-full">Watch more</a>
              </div>
            </div>
          </div>
      </div>
      </>
    </Layout>
  )
}
