'use client'
import { usePathname } from 'next/navigation';
import style from './activeLink.module.css'

import Link from "next/link";

interface Props{
  path:string;
  text:string;
}

export const ActiveLink = ({path,text}: Props) => {

  const pathName = usePathname();

  return (
    <Link 
      href={path} 
      className={ `${ style.link } ${  (pathName === path ) && style['active-link'] } ` }>
        {text}
      </Link>

  )
}
