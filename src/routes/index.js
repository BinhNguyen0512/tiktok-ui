import {HeaderOnly} from '~/components/Layout'

//Pages
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Search from '~/pages/Search'
import Upload from "~/pages/Upload"

export const publicRoutes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/following', 
        component: Following
    },
    {
        path: '/profile', 
        component: Profile
    },
    {
        path: '/upload', 
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: '/search', 
        component: Search,
        layout: null
    },
]
// cái này dành cho không cần đăng nhập vẫn xem được

export const privateRoutes = [
    
]
// Còn cái này phải đăng nhập mới xem được => Còn không thì sẽ lái sang trang login

