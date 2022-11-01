import { forwardRef } from "react";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import clsx from "clsx";
import { UrlObject } from "url";
import { useRouter } from "next/router";

declare type Url = string | (string & UrlObject);

type NextComposedProps = {
  href: Url;
  as?: Url;
  prefetch?: boolean;
  className?: string;
};

const NextComposed = forwardRef(function NextComposed(
  props: NextComposedProps | any,
  ref: any
) {
  const { as, href, className, ...other } = props;
  return (
    <NextLink href={href} as={as}>
      <a ref={ref} className={className} {...other} />
    </NextLink>
  );
});

type LinkProps = {
  href: Url;
  as?: Url;
  activeClassName?: string;
  className?: string;
  innerRef: any;
  naked?: boolean;
  onClick?: VoidFunction;
  prefetch?: boolean;
};

function Link(props: LinkProps | any) {
  const {
    href,
    activeClassName = "active",
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  );
}

export default forwardRef((props: LinkProps | any, ref) => (
  <Link {...props} innerRef={ref} />
));
