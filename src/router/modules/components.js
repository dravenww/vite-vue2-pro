/** When your routing table is too long, you can split it into small modules **/

import Layout from 'src/layout/index.vue'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('src/views/components-demo/tinymce.vue'),
      name: 'TinymceDemo',
      meta: { title: '富文本编辑' }
    },
    {
      path: 'markdown',
      component: () => import('src/views/components-demo/markdown.vue'),
      name: 'MarkdownDemo',
      meta: { title: 'Markdown' }
    },
    {
      path: 'json-editor',
      component: () => import('src/views/components-demo/json-editor.vue'),
      name: 'JsonEditorDemo',
      meta: { title: 'JSON 编辑器' }
    },
    {
      path: 'avatar-upload',
      component: () => import('src/views/components-demo/avatar-upload.vue'),
      name: 'AvatarUploadDemo',
      meta: { title: '头像上传' }
    },
    {
      path: 'dropzone',
      component: () => import('src/views/components-demo/dropzone.vue'),
      name: 'DropzoneDemo',
      meta: { title: 'Dropzone' }
    },
    {
      path: 'sticky',
      component: () => import('src/views/components-demo/sticky.vue'),
      name: 'StickyDemo',
      meta: { title: 'Sticky' }
    },
    {
      path: 'mixin',
      component: () => import('src/views/components-demo/mixin.vue'),
      name: 'ComponentMixinDemo',
      meta: { title: '小组件' }
    },
    {
      path: 'back-to-top',
      component: () => import('src/views/components-demo/back-to-top.vue'),
      name: 'BackToTopDemo',
      meta: { title: '回到顶部' }
    },
    {
      path: 'drag-dialog',
      component: () => import('src/views/components-demo/drag-dialog.vue'),
      name: 'DragDialogDemo',
      meta: { title: '拖拽 Dialog' }
    },
    {
      path: 'drag-select',
      component: () => import('src/views/components-demo/drag-select.vue'),
      name: 'DragSelectDemo',
      meta: { title: '拖拽 Select' }
    },
    {
      path: 'dnd-list',
      component: () => import('src/views/components-demo/dnd-list.vue'),
      name: 'DndListDemo',
      meta: { title: '拖拽 List' }
    },
    {
      path: 'drag-kanban',
      component: () => import('src/views/components-demo/drag-kanban.vue'),
      name: 'DragKanbanDemo',
      meta: { title: '拖拽看板' }
    }
  ]
}

export default componentsRouter
