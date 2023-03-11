export interface SideBarItems {
  name: string,
  matIcon?: string,
  id?: string,
  routerLinkActive?: string,
  routerLink?: string
  children: SideBarChildren[]
}

export interface SideBarChildren {
  name: string,
  matIcon?: string,
  id: string,
  routerLinkActive: string,
  routerLink: string
}

export const sidebarItems: SideBarItems[] =
  [
    {
      name: 'บอร์ด',
      children: [
        {
          name: 'บอลนอก',
          matIcon: '',
          id: '1',
          routerLink: '/',
          routerLinkActive: 'active'
        },
        {
          name: 'วาไรตี้',
          matIcon: '',
          id: '1',
          routerLink: '/',
          routerLinkActive: 'active'
        },
        {
          name: 'เกมส์',
          matIcon: '',
          id: '1',
          routerLink: '/',
          routerLinkActive: 'active'
        },
      ]
    },
  ]

export function getSideBarItemById(pageId: number[]) {
  return sidebarItems.map((i) => {
    const availableChildren = i.children.filter((j) => pageId.includes(+j.id));
    return ({ ...i, children: availableChildren });
  }).filter((j) => j.children.length > 0);

}