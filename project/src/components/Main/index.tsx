import { ReactNode} from 'react';
import './Main.css';

interface MainProps {
  children: ReactNode;
}

export function Main (props: MainProps): JSX.Element {
  return (
    <main className='main'>
      {props.children}
    </main>
  )
}
