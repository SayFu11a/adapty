"use client";

import { ConfigProvider } from "antd";
import { ReactNode } from "react";

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7c3aed",
          borderRadius: 8,
          fontSize: 16,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
