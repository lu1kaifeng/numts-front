<template>
    <v-card
            class="mx-auto"
            max-width="500"
            outlined
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="overline mb-4">Align</v-list-item-title>
                <v-container fluid>
                    <v-row dense>
                        <v-col cols="12">
                            <v-text-field label="Sequence" hide-details="auto" v-model="request.sequence"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

            </v-list-item-content>
        </v-list-item>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="align" text :disabled="this.request.sequence === ''">Align</v-btn>
        </v-card-actions>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-card>
</template>

<script>
    import AlignmentRequest from "@/model/AlignmentRequest";
    import AlignClient from "@/client/AlignClient";
    import AlignmentEntry from "@/model/AlignmentEntry";

    export default {
        name: "RequestSection",
        data:()=>({
            request:new AlignmentRequest(),
            overlay:false,
        }),
        methods:{
            percentageChange:function (percent) {
                this.request.lowestPercent = percent / 100;
            },
            align:function () {
              // eslint-disable-next-line @typescript-eslint/no-this-alias
                let model = this;
                this.overlay = true;
                this.entries = [];
                // eslint-disable-next-line no-unused-vars
                AlignClient.align(this.request).then(function (response) {
                    let entries = [];
                    for(let entry of response.data){
                        entry.PercentageOfIdentity = entry.PercentageOfIdentity * 100 + '%';
                        entries.push(new AlignmentEntry(entry));
                    }
                    model.overlay = false;
                    model.$emit("onResult",entries)
                    // eslint-disable-next-line no-unused-vars
                }).catch(function (error) {
                    alert(error);
                    model.overlay = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
