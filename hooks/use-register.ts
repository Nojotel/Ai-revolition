import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function useRegister() {
	const router = useRouter()
	const [register, { isLoading }] = useRegisterMutation()

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		re_password: '',
	})

	const { username, email, password, re_password } = formData

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		register({ username, email, password, re_password })
			.unwrap()
			.then(() => {
				toast.success('Please check email to verify account')
				router.push(`/activation/verify?email=${email}`)
			})
			.catch(() => {
				toast.error('Failed to register account')
			})
	}

	return {
		username,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	}
}
