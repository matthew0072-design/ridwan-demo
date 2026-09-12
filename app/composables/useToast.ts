
export function useToast() {
    const toast = useState<{ message: string; type: 'success' | 'error' } | null>('toast', () => null)

    function showToast(message: string, type: 'success' | 'error' = 'success') {
        toast.value = { message, type }
        setTimeout(() => {
            toast.value = null
        }, 3000)
    }

    return { toast, showToast }
}