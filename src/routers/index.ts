import { createBrowserRouter, RouterProvider } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // 新增数据加载方式
    loader: () => fetchData(),
    children: [
      {
        path: "about",
        element: <About />,
        // 新增 action 处理表单提交
        action: async ({ request }) => {
          return handleFormSubmit(await request.formData());
        },
      },
    ],
  },
]);
