import { Children } from "react"; // 해당 컴포넌트를 가져올때 Children --> children
import '../Section.scss';

export default function SectionContents({children}){
  return(
    <section>
      {children}
    </section>
  );
}