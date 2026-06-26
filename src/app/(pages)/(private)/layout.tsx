import React from 'react';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Nantinya di sini bisa ditambahkan validasi autentikasi (Private Route Guard)
  return <>{children}</>;
}
