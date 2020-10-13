export default function ({ route, redirect, $axios, $config: { baseURL } }) {
  if (route.name === 'login') return

  $axios
    .get('api/auth/me')
    .then((res) => {
      if (res.status !== 200) redirect('/login')
    })
    .catch(() => redirect('/login'))
}
