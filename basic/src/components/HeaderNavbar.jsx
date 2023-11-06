import { Children } from "react"; // 해당 컴포넌트를 가져올때 Children --> children
import '../Header.css';

export default function HeaderNavbar({children}){
  return(
    <header>
      {children}
    </header>
  );
}