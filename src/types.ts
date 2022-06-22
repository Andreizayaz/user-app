export type LinkType = {
  link: string;
  linkName: string;
};

export type getLinksFunctionType = (
  links: LinkType[],
  linksNames: string[]
) => LinkType[] | undefined;
