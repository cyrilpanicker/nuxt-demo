<template>
<div></div>  
</template>

<script>
export default {
    asyncData({error,env}){
        error({
            statusCode:404,
            message:env.pageNotFoundErrorMessage
        });
    }
}
</script>
