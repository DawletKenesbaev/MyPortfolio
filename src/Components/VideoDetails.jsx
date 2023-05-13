import React from 'react'
import useFetch from '../utils/api';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ThemeContext } from '@emotion/react';
function VideoDetails() {
    const { darkMode } = useContext(ThemeContext);
    const {data}=useFetch(
        'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50'

        )
    const {id}=useParams();
    console.log(darkMode);
  return (
  <div className={darkMode ? 'bg-neutral-800 text-white flex justify-center flex-row h-[calc(100%-56px)]' : 'bg-neutral-100 text-gray-800  flex justify-center flex-row h-[calc(100%-56px)]'}>
      <div className={darkMode ? 'w-full max-w-[1280px] flex flex-col lg:flex-row bg-neutral-800 text-white':'bg-neutral-100 text-gray-800 w-full max-w-[1280px] flex flex-col lg:flex-row'}>
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
              <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
              <iframe width={'100%'} height={'100%'} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                  <h1>w</h1>
              </div>
          </div>
          <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
              <div className='video'>
      {data?.items?.map((element) => (
      <Link to={`videos/${element.id.videoId}`} key={element.id.videoId}>
        <div className="">
          <img
            className=""
            src={element.snippet.thumbnails.medium.url}
            alt=""
          />
          <p className="">{element.snippet.title}</p>
          <div className="">
            <p className="">
              {element.snippet.channelTitle}
            </p>
            <p className="">{element.snippet.publishTime}</p>
          </div>
        </div>
      </Link>
    ))}
              </div>
          </div>
      </div>
  </div>

  )
}

export default VideoDetails;





