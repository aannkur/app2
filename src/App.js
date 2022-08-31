import React, {useEffect, useState} from 'react';
import './App.css';
import "../src/Services/Services.css"
import { BrowserRouter as Router, Routes, Navigate, Route, Link } from "react-router-dom";
import axios from 'axios';
import NavB from './Components/navbar';
import Home from './Screens/Home/Home';
import AboutUs from './Screens/About Us/AboutUs';
import Contact from './Screens/Contact Us/Contact';
import Blogs from './Screens/Blogs/blogs';
import Portfolio from './Screens/Portfolio/Portfolio';
import ApiIntegration from './Services/ApiIntegration';
import Shopify from './Services/Shopify';
import AngularJs from './Services/AngularJs';
import WebsiteRedesign from './Services/WebsiteRedesign';
import GraphicDesign from './Services/GraphicDesign';
import PHPDev from './Services/PHPDev';
import ShopifyCustomApp from './DetailedBlogs/ShopifyCustomApp';
import ShopifyAndSquare from './DetailedBlogs/ShopifyAndSquare';
import GraphQlVsRest from './DetailedBlogs/GraphQlVsRest';
import AgencyOverFreelance from './DetailedBlogs/AgencyOverFreelance';
import Aybiz from './Portfolio Details/AybizEcomApp';
import LearnItNow from './Portfolio Details/LearnItNow';
import EFW from './Portfolio Details/EFW';
import StemX from './Portfolio Details/StemX';
import MachineReliability from './Portfolio Details/MachineReliability';
import PSH from './Portfolio Details/PSH';
import Android from './Services/Android';
import ReactJs from './Services/ReactJs';
import Magento from './Services/Magento';
import WordPress from './Services/Wordpress';
import ECom from './Services/ECommerce';
import NodeJs from './Services/NodeJs';
import Yii from './Services/YII';
import Laravel from './Services/Laravel';
import Codeigniter from './Services/Codeigniter';
import CakePHP from './Services/CakePHP';
import MobileDesign from './Services/MobileDesign';
import ResponsiveWeb from './Services/ResponsiveWebDesign';
import LogoDesign from './Services/LogoDesign';
import IOS from './Services/IOS';
import Flutter from './Services/Flutter';
import BlogsView from './DetailedBlogs/BlogView';
import PortfolioDetail from './Portfolio Details/PortfolioDetail';

function App() {

  const [portfolio, setPortfolio] = useState([])
  const [services, setServices] = useState([])
  const [posts, setPost] = useState([]) 
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getItems =  async () =>{
      const result = await axios (
        `https://aquatecinnovative.com/clone/wp-json/wp/v2/portfolio?per_page=100`
        )
      console.log(result.data)

      setPortfolio(result.data)
      setLoading(false) 
    }
    getItems()

  }, []);


  useEffect(() => {
    const getItems =  async () =>{
      const result = await axios (
        `https://aquatecinnovative.com/clone/wp-json/wp/v2/pages?per_page=27`
        )
      console.log(result.data)

      setServices([result.data])
      setLoading(false) 
    }
    getItems()

  }, []);
 

    useEffect(() => {
      const getItems =  async () =>{
        const result = await axios (
          `https://aquatecinnovative.com/clone/wp-json/wp/v2/posts?per_page=13`
          )
        console.log(result.data)
  
        setPost(result.data)
        setLoading(false) 
      }
      getItems()
  
    }, []);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<NavB isLoading ={isLoading} services = {services} />}>
              <Route index element={<Home isLoading ={isLoading}  posts = {posts} portfolio = {portfolio}/>} />
              <Route path='about-us' element={<AboutUs isLoading ={isLoading} services = {services} />} />
              <Route path='contact-us' element={<Contact />} />
              <Route path='blogs' element={<Blogs isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='/blogs/:id' element={<BlogsView isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='portfolio' element={<Portfolio isLoading ={isLoading} portfolio = {portfolio} />} />
              <Route path='/portfolio/:id' element={<PortfolioDetail isLoading ={isLoading}  portfolio = {portfolio}/>} />
              {/*-------------------------------------*/}
              <Route path='api' element={<ApiIntegration isLoading ={isLoading} services = {services}/>} />
              <Route path='php' element={<PHPDev isLoading ={isLoading} services = {services}/>} />
              <Route path='reactJs' element={<ReactJs isLoading ={isLoading} services = {services}/>} />
              <Route path='magento' element={<Magento isLoading ={isLoading} services = {services}/>} />
              <Route path='shopify' element={<Shopify />} />
              <Route path='wordpress' element={<WordPress />} />
              <Route path='ecommerce' element={<ECom />} />
              <Route path='node' element={<NodeJs />} />
              <Route path='angular' element={<AngularJs />} />
              <Route path='yii' element={<Yii isLoading ={isLoading} services = {services}/>} />
              <Route path='laravel' element={<Laravel isLoading ={isLoading} services = {services}/>} />
              <Route path='codeIgniter' element={<Codeigniter isLoading ={isLoading} services = {services}/>} />
              <Route path='cakephp' element={<CakePHP isLoading ={isLoading} services = {services}/>} />
              <Route path='webRedesign' element={<WebsiteRedesign />} />
              <Route path='graphicDesign' element={<GraphicDesign />} />
              <Route path='mobileApplication' element={<MobileDesign isLoading ={isLoading} services = {services}/>} />
              <Route path='responsiveWeb' element={<ResponsiveWeb isLoading ={isLoading} services = {services}/>} />
              <Route path='logoDesign' element={<LogoDesign isLoading ={isLoading} services = {services}/>} />
              <Route path='ios' element={<IOS isLoading ={isLoading} services = {services}/>} />
              <Route path='android' element={<Android />} />
              <Route path='flutter' element={<Flutter isLoading ={isLoading} services = {services}/>} />
              {/*------------------------------------*/}
              <Route path='shopifyCustomApp' element={<ShopifyCustomApp isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='shopifyAndSquare' element={<ShopifyAndSquare isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='graphQlVsRest' element={<GraphQlVsRest isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='agencyOverFreelance' element={<AgencyOverFreelance isLoading ={isLoading}  posts = {posts}/>} />
              {/*<Route path='maxLeads' element={<MaxLeads isLoading ={isLoading}  posts = {posts}/>} />
               <Route path='guideToShopify' element={<GuideToShopify isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='valentine' element={<Valentine isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='christmass' element={<Christmass isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='flutterNewHue' element={<FlutterNewHue isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='festivalOfLight' element={<FestivalOfLight isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='inhanseResponseTime' element={<InhanseResponseTime isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='webTrends' element={<WebTrends isLoading ={isLoading}  posts = {posts}/>} />
              <Route path='devMasters' element={<DevMasters isLoading ={isLoading}  posts = {posts}/>} /> */}
              {/* ---------------------------------- */}
              {/* <Route path='gembot' element={<Gembot isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='logosignature' element={<LogoSignature isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='myceo' element={<MyCeo isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='texasButchers' element={<TexasButchers isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='spongeapp' element={<SpongeApp isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='hayya' element={<Hayya isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='coffeeHero' element={<CoffeeHero isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='omg' element={<OMG isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='tds' element={<TheDrinkStore isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='financeapp' element={<FinanceApp isLoading ={isLoading}  portfolio = {portfolio}/>} /> */}
              <Route path='aybiz' element={<Aybiz isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='learnitnow' element={<LearnItNow isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='efw' element={<EFW isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='psh' element={<PSH isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='stemx' element={<StemX isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='machineReliability' element={<MachineReliability isLoading ={isLoading}  portfolio = {portfolio}/>} />
              <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
