<template>
<div></div>  
</template>

<script>
export default {
    asyncData({error}){
        error({
            statusCode:404,
            message:'This page could not be found.'
        })
    }
}
</script>
