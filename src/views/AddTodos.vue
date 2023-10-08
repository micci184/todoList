<script setup lang="ts">
</script>

<template>
	<v-row no-gutters class="w-50">
		<v-col cols="9">
			<v-text-field
				label="Add new"
				variant="outlined"
				class="add-text-field"
			></v-text-field>
		</v-col>
		<v-col cols="1">
			<v-btn color="primary"
			class="w-100 ml-3 add-v-btn"
			>Add</v-btn>
		</v-col>
	</v-row>
</template>

<style scoped>
.w-50 .add-v-btn {
    height: 54px;
}
</style>
