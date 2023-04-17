import React from 'react';
import {Navbar } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import {FiUserPlus} from 'react-icons/fi';
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {SlBell} from 'react-icons/sl'
import {IoChevronForwardOutline} from 'react-icons/io5'
import VideoThumbnails from './RecentVideos';
import { useNavigate } from 'react-router-dom';
export default function UserPage() {
 const navigate= useNavigate();
  return (
    <div className='user-page'>
        <Navbar className='user-nav'>


        <div className='search-bar'>
       <div className='search-icon'><BsSearch/></div>
        <input className='search'type='search' placeholder='Search'/>

        </div>
      <div style={{marginLeft:'auto',marginRight:'40px'}}>
        <button className='invite-btn'>Invite<span style={{marginLeft:'10px'}}><FiUserPlus/></span></button>
        <button className='faq'><AiOutlineQuestionCircle/></button>
        <button className='bell'><SlBell/></button>
        <img className='userDp' src='data:image/png;base64,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' alt='usepic'/>
        </div>
        </Navbar>
        <h2 className='intro-text'>Let's create some <span style={{fontWeight:700}}>Videos!</span></h2>
        <div className='user-btns'>
          <button onClick={()=>navigate("/editor")} className='create-btn'><span><img style={{height:'50px',marginTop:'6px',marginBottom:'3px',marginRight:'6px'}}src='https://i.ibb.co/r5mN0Mq/edit.png'/></span>Create Project</button>
          <button className='record-btn'><span><img style={{height:'44px',marginTop:'6px',marginBottom:'2px',marginRight:'6px',width:'48px'}}src='https://i.ibb.co/Nn94HDP/record.png'/></span>Record Video</button>
          <button className='golive-btn'><span><img style={{height:'42px',marginTop:'6px',marginBottom:'3px',marginRight:'6px',width:'44px'}}src='https://i.ibb.co/ZWBVJrN/go-live.png'/></span>Go Live</button>
          <button className='podcast-btn'><span><img style={{height:'40px',marginTop:'6px',marginBottom:'3px',marginRight:'6px',width:'40px'}}src='https://i.ibb.co/sKG2BTf/podcast.png'/></span>Record Podcast</button>
        </div>
        <div style={{marginLeft:'50px',marginTop:'50px',display:'flex'}}>
        <p style={{fontWeight:500,fontSize:'18px'}}>My Recent Videos</p>
       <button className='allvid-btn'>All Videos<span style={{marginLeft:'6px'}}><IoChevronForwardOutline/></span></button>
        </div>
        <div className='img'>
          <img className='img1' src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' />
          <img className='img2' src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' />
          <img className='img3'  src='https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg' />
        </div>
        {/* <RecentVideos/> */}
        {/* <VideoPlayer/> */}
        <VideoThumbnails/>
    </div>
  )
}
