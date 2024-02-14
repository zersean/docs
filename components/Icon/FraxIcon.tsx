import { memo } from 'react';

function FraxtalIcon(props: { size?: number; className?: string }): React.ReactElement<{
  size?: number;
  className?: string;
}> {
  return (
    <svg
      viewBox="0 0 283.46 283.46"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? `${props.size}px` : '100%'}
      height={props.size ? `${props.size}px` : '100%'}
      className={props.className}
      name="FraxIcon"
    >
      <circle cx="141.73" cy="141.73" r="141" fill="#fff" />
      <circle cx="141.73" cy="141.73" r="129" fill="#000" />
      <path
        fill="#fff"
        d="M212.43,141.73c0-14.38-4.32-27.76-11.72-38.94l21.95-21.95L202.92,61.1l-21.89,21.89
		c-11.24-7.55-24.76-11.96-39.29-11.96c-14.38,0-27.76,4.32-38.94,11.72L80.84,60.8L61.1,80.54l21.89,21.89
		c-7.55,11.24-11.96,24.76-11.96,39.29c0,14.38,4.32,27.76,11.72,38.94L60.8,202.62l19.74,19.74l21.89-21.89
		c11.24,7.55,24.76,11.96,39.29,11.96c14.38,0,27.76-4.32,38.94-11.72l21.96,21.96l19.74-19.74l-21.89-21.89
		C208.02,169.78,212.43,156.26,212.43,141.73z M98.96,141.73c0-23.59,19.19-42.78,42.78-42.78s42.78,19.19,42.78,42.78
		s-19.19,42.78-42.78,42.78S98.96,165.32,98.96,141.73z"
      />
    </svg>
  );
}

const Memo = memo(FraxtalIcon);
export default Memo;
