<!--<template>-->
<!--	<client-only>-->
<!--		<ckeditor v-model="editorData" :editor="editor"></ckeditor>-->
<!--	</client-only>-->
<!--</template>-->

<!--<script>-->
<!--import Editor from '~/ckeditor5/build/ckeditor.js';-->

<!--export default {-->
<!--	name: 'TextEditor',-->
<!--	data() {-->
<!--		return {-->
<!--			editor: Editor,-->
<!--			editorData: '<p>Content of the editor.</p>',-->
<!--		};-->
<!--	}-->
<!--}-->
<!--</script>-->


<template>
	<client-only>
		<section class="container">
			<div 	class="quill-editor"
						:content="content"
						@change="onEditorChange($event)"
						v-quill:myQuillEditor="editorOption">
			</div>
		</section>
	</client-only>
</template>

<script>
// TODO: Сделать автоссылки, разобраться с подключением библиотек с SSR


import Quill from 'quill';
import AutoLinks from 'quill-auto-links';

Quill.register('modules/autoLinks', AutoLinks);


export default {
	data () {
		return {
				content: ``,
				editorOption: {
					fontsize: 14,
					modules: {
						toolbar: [
								['bold', 'italic', 'underline', 'strike','link'],        // toggled buttons
								['blockquote', 'code-block'],
								[{ 'header': 1 }, { 'header': 2 }],               // custom button values
								[{ 'list': 'ordered'}, { 'list': 'bullet' }],
								[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
								[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
								[{ 'direction': 'rtl' }],                         // text direction
								[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
								[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
								[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
								[{ 'font': [] }],
								[{ 'align': [] }],
								// ['clean']                                         // remove formatting button
							],
						autoLinks: {
							paste: false,
							type: true
						}
					},
					placeholder: 'Комментарий...',
					theme: 'snow',

				},
		}
	},
	watch: {
		content(){
			this.returnContent()
		}
	},
	methods: {

		onEditorChange({ html }) {
			this.content = html
		},

		returnContent(){
			this.$emit('getContent', this.content)
		}
	}
}
</script>

<style lang="scss" scoped>
.ql-container.ql-snow {
	border: 0px solid #ccc;
}
</style>

