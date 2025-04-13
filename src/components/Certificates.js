import React from 'react';
import Link from 'next/link';

export default function Certificates() {
  const certificates = [
    { 
      id: 1, 
      name: '80G Certificate', 
      link: 'https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf',
      external: true 
    },
    { 
      id: 2, 
      name: '12A Certificate', 
      link: 'https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf',
      external: true 
    },
    { 
      id: 3, 
      name: 'CSR Certificate', 
      link: 'https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF',
      external: true 
    },
    { 
      id: 4, 
      name: 'Suvidha Darpan Registration', 
      link: 'https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf',
      external: true 
    },
    { 
      id: 5, 
      name: 'Suvidha Pan Card', 
      link: 'https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf',
      external: true 
    },
  ];

  const usefulLinks = [
    { id: 1, name: 'Verify Your Certificate', link: 'https://suvidhafoundationedutech.org/verify.php', external: true },
    { id: 2, name: 'Free Kids Coding Bootcamp', link: 'https://kidcoder.netlify.app/', external: true },
    { id: 3, name: 'Privacy Policy', link: 'https://suvidhafoundationedutech.org/privacypolicy.php', external: true },
  ];

  const renderLink = (item) => {
    const linkProps = {
      key: item.id,
      href: item.link,
      className: "flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow",
    };

    if (item.external) {
      linkProps.target = "_blank";
      linkProps.rel = "noopener noreferrer";
    }

    return (
      <a {...linkProps}>
        <svg
          className="w-6 h-6 text-primary mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="text-gray-700">{item.name}</span>
        {item.external && (
          <svg
            className="w-4 h-4 ml-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map(renderLink)}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Useful Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usefulLinks.map(renderLink)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 