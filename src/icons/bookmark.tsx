import Icon_Props from "./props";

export default function(props: Icon_Props) {
  return <svg height="2em" width="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`fill-current stroke-current ${props.className}`}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20.9425C20 22.6114 18.0766 23.5462 16.7644 22.5152L12 18.7717L7.23564 22.5152C5.92338 23.5462 4 22.6114 4 20.9425V4ZM7 3C6.44772 3 6 3.44772 6 4V20.9425L12 16.2283L18 20.9425V4C18 3.44772 17.5523 3 17 3H7Z"/>
  </svg>;
}