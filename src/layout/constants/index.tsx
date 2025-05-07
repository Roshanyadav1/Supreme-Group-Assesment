interface Link {
    title: string;
    links: { label: string; href: string }[];
  }
  
  export const footerLinks: Link[] = [
    {
      title: 'Applications',
      links: [
        { label: 'Apparel', href: '#' },
        { label: 'Automotive', href: '#' },
        { label: 'Filtration', href: '#' },
        { label: 'Customised Nonwoven', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Innovation', href: '#' },
        { label: 'Global', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'More',
      links: [
        { label: 'Careers', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms and Conditions', href: '#' },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { label: 'Twitter', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'Medium', href: '#' },
      ],
    },
  ];
  