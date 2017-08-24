<template>
<div></div>  
</template>

<script>
export default {
    asyncData({env,error}){
        error({
            statusCode:404,
            message:env.pageNotFoundErrorMessage
        });
    }
}
</script>
