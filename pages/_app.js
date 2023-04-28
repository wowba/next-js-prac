// 업데이트 된 App 컴포넌트는 global.css 파일을 임포트만 해도 알아서 적용된다.
import '../styles/globals.css'

// Next.js 업데이트 이후 커스텀 App 컴포넌트를 사용한다면
// getStaticProps 등의 함수에서 데이터를 제대로 반환하지 못한다.

// const App = ({Component, PageProps}) => {
//   return <Component {...PageProps} />
// }

// export default App

import App from 'next/app';

export default App