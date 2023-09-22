
import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title : "Prompt Share",
  discription: 'Discover & Share AI Prompts',
  image : '/assets/images/logo.svg',
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
       <body>
       <Provider>
         <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            {/* {children} */}
            <Nav/>
            {children}
          </main>
        </Provider>
       </body>
    </html>
  )
}

export default RootLayout;
