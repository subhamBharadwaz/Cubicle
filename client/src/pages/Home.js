import React, { useEffect } from 'react'

// Import components
import Weather from '../components/weather/Weather'
import News from '../components/news/News'

const Home = () => {
  //Chat bot Tawk
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date()
    ;(function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = 'https://embed.tawk.to/610a91c8649e0a0a5ccf8019/1fc8kiu2v'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
    })()
    Tawk_API.onLoad = function () {
      console.log('chat loaded')
      Tawk_API.setAttributes(
        {
          name: 'Test Name',
          email: 'email@email.com',
          hash: 'hash value',
        },
        function (error) {},
      )
    }
  }, [])
  return (
    <div>
      <Weather />
      <News />
    </div>
  )
}

export default Home
