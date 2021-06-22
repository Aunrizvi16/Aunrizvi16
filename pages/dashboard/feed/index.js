import React from "react";
import Layout from "../../../components/Dashboard/Layout";
import Newsfeeds from "../../../components/Dashboard/Newsfeeds/post";
import NewsfeedsHelper from "../../../Helpers/NewsfeedsHelper";
import $ from 'jquery'
const jwt = require('jsonwebtoken');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:''
     
    };
  }
  componentDidMount = (prevProps) => {
    NewsfeedsHelper.Get_all().then((data)=>{
      let info=[]
      let array = data.data.data.newsfeeds_posts
      console.log(array);
      array.forEach((element,index) => {
        info.push(<Newsfeeds data={element}   />)
      });
      
      this.setState({posts:info})
    })
    
  };

  render() {
    


    return (
      <>
        <Layout>
          <div class="container m-auto">
            <h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5">
              {" "}
              Feed{" "}
            </h1>

            <div class="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
              <div class="space-y-5 flex-shrink-0 lg:w-7/12">
                {/* {this.state.posts.map((item, key) => (
                  <Newsfeeds/>
                ))}
                 */}
               
                 {this.state.posts}


                <div class="flex justify-center mt-6" id="toggle" hidden>
                  <a
                    href="#"
                    class="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white"
                  >
                    Load more ..
                  </a>
                </div>
              </div>
              <div class="lg:w-5/12">
                <div class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                  <div class="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:border-gray-800">
                    <h2 class="font-semibold text-lg">Who to follow</h2>
                    <a href="#"> Refresh</a>
                  </div>

                  <div class="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 dark:divide-gray-800 dark:text-gray-100">
                    <div class="flex items-center justify-between py-3">
                      <div class="flex flex-1 items-center space-x-4">
                        <a href="profile.html">
                          <img
                            src="/images/avatars/avatar-2.jpg"
                            class="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div class="flex flex-col">
                          <span class="block capitalize font-semibold">
                            {" "}
                            Johnson smith{" "}
                          </span>
                          <span class="block capitalize text-sm">
                            {" "}
                            Australia{" "}
                          </span>
                        </div>
                      </div>

                      <a
                        href="#"
                        class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"
                      >
                        {" "}
                        Follow{" "}
                      </a>
                    </div>
                    <div class="flex items-center justify-between py-3">
                      <div class="flex flex-1 items-center space-x-4">
                        <a href="profile.html">
                          <img
                            src="/images/avatars/avatar-1.jpg"
                            class="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div class="flex flex-col">
                          <span class="block capitalize font-semibold">
                            {" "}
                            James Lewis{" "}
                          </span>
                          <span class="block capitalize text-sm">
                            {" "}
                            Istanbul{" "}
                          </span>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"
                      >
                        {" "}
                        Follow{" "}
                      </a>
                    </div>
                    <div class="flex items-center justify-between py-3">
                      <div class="flex flex-1 items-center space-x-4">
                        <a href="profile.html">
                          <img
                            src="/images/avatars/avatar-5.jpg"
                            class="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div class="flex flex-col">
                          <span class="block capitalize font-semibold">
                            {" "}
                            John Michael{" "}
                          </span>
                          <span class="block capitalize text-sm">
                            {" "}
                            New York{" "}
                          </span>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"
                      >
                        {" "}
                        Follow{" "}
                      </a>
                    </div>
                    <div class="flex items-center justify-between py-3">
                      <div class="flex flex-1 items-center space-x-4">
                        <a href="profile.html">
                          <img
                            src="/images/avatars/avatar-7.jpg"
                            class="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div class="flex flex-col">
                          <span class="block capitalize font-semibold">
                            {" "}
                            Monroe Parker{" "}
                          </span>
                          <span class="block capitalize text-sm"> Yeman </span>
                        </div>
                      </div>

                      <a
                        href="#"
                        class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"
                      >
                        {" "}
                        Follow{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div class="mt-5" uk-sticky="offset:28; bottom:true ; media @m">
                  <div class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                    <div class="bg-gray-50 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:bg-gray-800 dark:border-gray-700">
                      <h2 class="font-semibold text-lg">Latest</h2>
                      <a href="explore.html"> See all</a>
                    </div>

                    <div class="grid grid-cols-2 gap-2 p-3 uk-link-reset">
                      <div class="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
                        <a href="#story-modal" uk-toggle>
                          <img
                            src="/images/post/img2.jpg"
                            class="w-full h-full absolute object-cover inset-0"
                          />
                        </a>
                        <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                          <a href="#">
                            {" "}
                            <i class="uil-heart"></i> 150{" "}
                          </a>
                        </div>
                      </div>

                      <div class="bg-red-500 max-w-full h-40 rounded-lg relative overflow-hidden uk-transition-toggle">
                        <a href="#story-modal" uk-toggle>
                          <img
                            src="/images/post/img7.jpg"
                            class="w-full h-full absolute object-cover inset-0"
                          />
                        </a>
                        <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                          <a href="#">
                            {" "}
                            <i class="uil-heart"></i> 150{" "}
                          </a>
                        </div>
                      </div>

                      <div class="bg-red-500 max-w-full h-40 -mt-8 rounded-lg relative overflow-hidden uk-transition-toggle">
                        <a href="#story-modal" uk-toggle>
                          <img
                            src="/images/post/img5.jpg"
                            class="w-full h-full absolute object-cover inset-0"
                          />
                        </a>
                        <div class="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                          <a href="#">
                            {" "}
                            <i class="uil-heart"></i> 150{" "}
                          </a>
                        </div>
                      </div>

                      <div class="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
                        <a href="#story-modal" uk-toggle>
                          <img
                            src="/images/post/img3.jpg"
                            class="w-full h-full absolute object-cover inset-0"
                          />
                        </a>
                        <div class="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                          <a href="#">
                            {" "}
                            <i class="uil-heart"></i> 150{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
