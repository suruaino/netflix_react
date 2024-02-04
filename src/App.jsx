import './App.css'
import tv from './assets/tv.png'
import mobile from './assets/mobile-0819.jpg'
import kids from './assets/kids.png'
import cross from './assets/cross.svg'


const Header = () => {

  return(
    <header className='main_header p-6'>
      <div className="logo">NETFLIX</div>
      <a href='#'>Sign In</a>
    </header>

  )
}

const Hero =() => {

  return(
    <section className='hero flex flex-col justify-between'>
      <div className="overlay"></div>
      <div className="hero_content text-center font-medium px-10 flex flex-col justify-center items-center gap-5">
        <h1 className='text-3xl  font-bold'>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h2>Readt to watch? Enter your email to create or restart your membership</h2>
        <form action="" className='w-full gap-4'>

          <input id='email' className='h-12 w-full md:w-4/5' type="email" placeholder='Email address' />
          <button role='submit' className='h-12 font-bold px-8 flex justify-center items-center gap-4'>Get Started <i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </form>
      </div>
    </section>
  )
}

const Section1 = () => {

  return(
    <section className='section1 text-center px-10 py-10 flex flex-col md:flex-row '>
      <div className="text flex flex-col gap-4">
        <h2 className='text-4xl font-bold'>Enjoy on your TV</h2>
        <p className="text-lg">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div className="img">
        <img src={tv} alt="" />
      </div>
    </section>
  )
}

const Section2 = () => {

  return(
    <section className='section1 text-center py-10 px-5 flex flex-col md:flex-row '>
      <div className="text flex flex-col gap-4">
        <h2 className='text-3xl font-bold'>Download your shows to watch offline</h2>
        <p className="text-lg font-medium">Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="img">
        <img src={mobile} alt="" />
      </div>
    </section>
  )
}

const Section3 = () => {

  return(
    <section className='section1 text-center py-10 pb-20 px-5 flex flex-col md:flex-row gap-4'>
      <div className="left flex flex-col gap-4">
        <h2 className='text-3xl font-bold'>Watch everywhere</h2>
        <p className="text-lg font-medium">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div className="right">
        
      </div>
    </section>
  )
}

const Section4 = () => {

  return(
    <section className='section1 text-center py-10 px-5 flex flex-col md:flex-row gap-4'>
      <div className="left flex flex-col gap-4">
        <h2 className='text-4xl font-bold'>Create profiles for kids</h2>
        <p className="text-lg font-medium">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
      </div>
      <div className="img">
        <img src={kids} alt="" />
      </div>
    </section>
  )
}

const Section5 = () => {

  return(
    <section className='faq w-full text-center py-10 px-5 flex flex-col items-center gap-8'>
      <h2 className=' text-4xl md:text-5xl font-bold'>Frequently Asked Questions</h2>
      <div className="content_wrapper w-full flex flex-col gap-4">
        <div className="questionbx flex flex-col gap-2">
          <div className="question w-full h-auto  flex flex-col justify-between items-center relative">
            <input type="checkbox" className='w-full h-full absolute opacity-0' hecked/>
            <span className='w-full h-16 md:h-20 px-6 flex justify-between items-center'>
              <h4 className='text-xl md:text-2xl'>What is Netflix?</h4>
              <img className='w-3 md:w-6' src={cross} alt=""  />
            </span>
            <div className="answer px-6 py-4 text-left">
              <p className='text-xl'>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /> <br />
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </p>
            </div>
          </div>
          
          <div className="question w-full h-auto  flex flex-col justify-between items-center relative">
            <input type="checkbox" className='w-full h-full absolute opacity-0' hecked/>
            <span className='w-full h-16 md:h-20 px-6 flex justify-between items-center'>
              <h4 className='text-xl md:text-2xl'>How much does Netflix cost?</h4>
              <img className='w-3 md:w-6' src={cross} alt=""  />
            </span>
            <div className="answer px-6 py-4 text-left">
              <p className='text-xl'>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>

          <div className="question w-full h-auto  flex flex-col justify-between items-center relative">
            <input type="checkbox" className='w-full h-full absolute opacity-0' hecked/>
            <span className='w-full h-16 md:h-20 px-6 flex justify-between items-center'>
              <h4 className='text-xl md:text-2xl'>Where can I watch?</h4>
              <img className='w-3 md:w-6' src={cross} alt=""  />
            </span>
            <div className="answer px-6 py-4 text-left">
              <p className='text-xl'>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br />
              You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </div>

          <div className="question w-full h-auto  flex flex-col justify-between items-center relative">
            <input type="checkbox" className='w-full h-full absolute opacity-0' hecked/>
            <span className='w-full h-16 md:h-20 px-6 flex justify-between items-center'>
              <h4 className='text-xl md:text-2xl'>How do I cancel?</h4>
              <img className='w-3 md:w-6' src={cross} alt=""  />
            </span>
            <div className="answer px-6 py-4 text-left">
              <p className='text-xl'>
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
              </p>
            </div>
          </div>

          <div className="question w-full h-auto  flex flex-col justify-between items-center relative">
            <input type="checkbox" className='w-full h-full absolute opacity-0' hecked/>
            <span className='w-full h-16 md:h-20 px-6 flex justify-between items-center'>
              <h4 className='text-xl md:text-2xl'>What can I watch on Netflix?</h4>
              <img className='w-3 md:w-6' src={cross} alt="" />
            </span>
            <div className="answer px-6 py-4 text-left">
              <p className='text-xl'>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>

          <div className="question w-full h-auto  flex flex-col justify-between items-center relative">
            <input type="checkbox" className='w-full h-full absolute opacity-0' hecked/>
            <span className='w-full h-16 md:h-20 px-6 flex justify-between items-center'>
              <h4 className='text-xl md:text-2xl'>Is Netflix good for kids?</h4>
              <img className='w-3 md:w-6' src={cross} alt=""  />
            </span>
            <div className="answer px-6 py-4 text-left">
              <p className='text-xl'>
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br /> <br />
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </p>
            </div>
          </div>

        </div>
        
      </div>
     
      <section className='bottom_call_to_action py-6 w-full text-center  flex flex-col items-center justify-center gap-6'>
          <h2 className="text-xl font-medium px-8">Ready to watch? Enter your email to create or restart your membership.</h2>
          <form action="" className='w-full flex flex-col items-center md:flex-row md:justify-center gap-4 md:gap-2'>

            <input id='bottom_email' className='w-full' type="email" placeholder='Email address' />
            <button role='submit' className='text-2xl px-8 flex justify-center items-center gap-4'>Get Started <i class="fa fa-angle-right" aria-hidden="true"></i></button>
          </form>
      </section>
    </section>
  )
}

const Footer = () => {
  

  return(
    <footer className='px-5 md:px-48 py-10 flex flex-col gap-5'>
      <div className="top">
        <a href="#">Questions? Contact us.</a>
      </div>
      <div className="center">
        <ul className=''>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Corperate Information</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Speed Test</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Only on Netflix</a></li>
        </ul>
      </div>

      <div className="bottom flex flex-col gap-5">
        <select name="" id="" className='font-bold px-5 py-1 max-w-36'>
          <option className='' value="English">English</option>
        </select>

        <div className="trade_mark ">
          Netflix Nigeria
        </div>
      </div>
    </footer>
  )
}
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  )
}

export default App
