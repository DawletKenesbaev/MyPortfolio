import React from 'react';

import './porfolio.scss';
import temp  from '../../assets/guardians.jpg'
import todo from '../../assets/todolist.png'
import youtube from '../../assets/youtube.png'
import finsweet from '../../assets/finsw.png'
function Porfolio() {
  return (
    <section id='porfolio'>
      <div className="container sm:text-center md:text-left ">
        <div  className='porfolio__des sm:text-center'>
        <h5>My Recent Work</h5>
        <h2 className='mb-5'>My Porfolio</h2>
        </div>
        <div className="porfolio__container grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={temp} alt="img" />
            </div>
            <h3>Tis is porfolio item title</h3>
            <p className='mt-3 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo veniam praesentium blanditiis soluta! Ipsa consectetur dolore dolor explicabo corporis!</p>
            <a href="" classNam target='_blank' className='btn  mr-5'>Git Hub</a>
            <a href="" className='btn btn-primary'>Live Demo</a>
          </article>
          <article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={todo} alt="img" />
            </div>
            <h3>Todo LIst</h3>
            <p className='mt-3 mb-3'>I created this project using HTML,CSS,Javascript .It is basic Todo List and has delete and checked functions.it is created using LocalStorage</p>
            <a href="https://github.com/NUKUS777/TodoList__usingLocalStorage" className='btn mr-5' target='_blank'>Git Hub</a>
            <a href="https://deft-crisp-eeaffa.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={temp} alt="img" />
            </div>
            <h3>Tis is porfolio item title</h3>
            <p className='mt-3 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo veniam praesentium blanditiis soluta! Ipsa consectetur dolore dolor explicabo corporis!</p>
            <a href="" className='btn mr-5' target='_blank'>Git Hub</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='porfolio__item'>
            <div className="porfolio__item-img">
              <img src={finsweet} alt="img" />
            </div>
            <h3>Finsweet</h3>
            <p className='mt-3 mb-3'>In this project, i learned how to work with (fake) API from NewscatcherAPI.com .This site for young entrepreneurs</p>
            <a href="https://github.com/NUKUS777/Finsweet" className='btn mr-5' target='_blank'>Git Hub</a>
            <a href="https://finsweet-teal.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
        </div>
      </div>
    </section>
  )
}
export default Porfolio