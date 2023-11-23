<template>  
  <div class="main">  
    <!-- <h1>PDF to Word Converter</h1>   -->
    <div class="headerTitle">
      <div class="header_txt">
        <div class="title_y">Pdf转Word</div>

        <ShareLink />
      </div>
      <div class="title_small_y">
        可以实现PDf文件转Word文件
      </div>
    </div>
    <form @submit.prevent="convertPDF">  
      <input type="file" ref="fileInput" placeholder="Select PDF file" />  
      <button type="submit">Convert</button>  
      <div v-if="conversionStatus">  
        <p>{{ conversionStatus }}</p>  
        <button @click="downloadWordFile">Download Word File</button>  
      </div>  
    </form>  
  </div>  
</template>  
  
<script>  
import axios from 'axios';  
  
export default {  
  data() {  
    return {  
      conversionStatus: '',  
      wordFileUrl: ''  
    };  
  },  
  methods: {  
    convertPDF() {  
      const formData = new FormData();  
      formData.append('pdfFile', this.$refs.fileInput.files[0]);  
      axios.post( + "/PdftoWord", formData)  
        .then(response => {  
          this.conversionStatus = ' Conversion successful!';  
          this.wordFileUrl = response.data.url;  
        })  
        .catch(error => {  
          this.conversionStatus = 'Conversion failed.';  
        });  
    },  
    downloadWordFile() {  
      axios.get(this.wordFileUrl, { responseType: 'blob' })  
        .then(response => {  
          const url = window.URL.createObjectURL(new Blob([response.data]));  
          const link = document.createElement('a');  
          link.href = url;  
          link.setAttribute('download', 'converted.docx');  
          document.body.appendChild(link);  
          link.click();  
        });  
    }  
  }  
};  
</script>  
  
<style scoped>  

.main {
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  cursor: pointer;
  margin-top: 300px;
  border: 2px dashed #e2e2e2;
  border-radius: 24px;
}
.headerTitle {
  margin-top: 11px;
}
.header_txt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -380px;
  margin-left: 120px;
}
.title_y {
  font-size: 28px;
  font-weight: 600;
  word-spacing: 100px;
  margin: 10px auto;
}

.title_small_y {
  width: 965px;
  height: 40px;
  margin-top: -175px;
  padding: 10px;
  text-align: center;
  margin-left: 57px;
}




</style>