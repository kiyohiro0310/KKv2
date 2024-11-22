import Link from "next/link";

const LinkText = (props: { title: string, footer?: boolean }) => {
  return (
    <Link className="cursor-pointer hover:text-sub flex items-center justify-start transition duration-200" href={`/${props.title.toLowerCase().replace(' ', '')}`}>
      {props.footer && '>'} {props.title}
    </Link>
  );
};

export default LinkText;
