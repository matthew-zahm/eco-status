import Icon_Props from "./props";

export default function(props: Icon_Props) {
  return <svg height="2em" width="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`fill-current stroke-current ${props.className}`}>
    <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" />
  </svg>;
}