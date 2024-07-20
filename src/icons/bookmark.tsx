import Icon_Props from "./props";

export default function(props: Icon_Props) {
  return <svg height="2em" width="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={props.className}>
    <path d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>;
}