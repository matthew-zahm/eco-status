import Icon_Props from "./props";

export default function(props: Icon_Props) {
  return <svg height="2em" width="2em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={`fill-current stroke-current ${props.className}`}>
    <path d="M24,6A18,18,0,1,1,6,24,18.1,18.1,0,0,1,24,6m0-4A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Z"/>
    <path d="M33.3,13.3,20,20,13.3,33.3a1.1,1.1,0,0,0,1.4,1.4L28,28l6.7-13.3A1.1,1.1,0,0,0,33.3,13.3ZM24,26a2,2,0,1,1,2-2A2,2,0,0,1,24,26Z"/>
  </svg>;
}